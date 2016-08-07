themeConfig.$inject = ['$mdThemingProvider'];

export default function themeConfig($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette('green')
        .dark();
}