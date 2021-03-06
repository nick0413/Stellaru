import ctypes
from ctypes import wintypes
from ctypes import windll
import os
import string

CSIDL_PERSONAL = 5       # My Documents
SHGFP_TYPE_CURRENT = 0   # Get current, not default value

STEAM_DIRS = [
    'Steam',
    'Program Files/Steam',
    'Program Files (x86)/Steam'
]
PATH_SUFFIXES = [
    'Paradox Interactive/Stellaris/save games',
    'Paradox Interactive/Stellaris Plaza/save games',
    'Paradox Interactive/Stellaris GamePass/save games'
]


def _get_drives():
    drives = []
    bitmask = windll.kernel32.GetLogicalDrives()
    for letter in string.ascii_uppercase:
        if bitmask & 1:
            drives.append(letter)
        bitmask >>= 1
    return drives


def find_steam():
    drives = [f'{drive}:\\' for drive in _get_drives()]
    for drive in drives:
        for folder in STEAM_DIRS:
            path = os.path.join(drive, folder)
            if os.path.isdir(path):
                return path
    return None


def get_os_specific_save_dirs():
    docs_path = ctypes.create_unicode_buffer(wintypes.MAX_PATH)
    ctypes.windll.shell32.SHGetFolderPathW(None, CSIDL_PERSONAL, None, SHGFP_TYPE_CURRENT, docs_path)
    documents = str(docs_path.value)
    return [
        os.path.join(documents, suffix) for suffix in PATH_SUFFIXES
        if os.path.isdir(os.path.join(documents, suffix))
    ]
