export function getMobileOperatingSystem() {
  return navigator?.userAgent || navigator?.vendor || window?.opera;
}
