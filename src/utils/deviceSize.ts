export default class DeviceSize {
  static sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
  };

  public static deviceWidths = {
    mobileS: `(min-width: ${DeviceSize.sizes.mobileS})`,
    mobileM: `(min-width: ${DeviceSize.sizes.mobileM})`,
    mobileL: `(min-width: ${DeviceSize.sizes.mobileL})`,
    tablet: `(min-width: ${DeviceSize.sizes.tablet})`,
    laptop: `(min-width: ${DeviceSize.sizes.laptop})`,
    laptopL: `(min-width: ${DeviceSize.sizes.laptopL})`,
    desktop: `(min-width: ${DeviceSize.sizes.desktop})`
  };
}
