import { Test, Expect, TestFixture, SpyOn } from "alsatian";
import NavigationBarComponent from "./navigation-bar-component";

// @TestFixture("Navigation Bar Component Tests")
export default class NavigationBarComponentTests {
    @Test("Menu is not open by default")
    public menuNotOpenByDefault() {
        const navigationBar = new NavigationBarComponent();

        Expect(navigationBar.state.isMenuOpen).toBe(false);
    }
    @Test("Initial toggle opens the menu")
    public togglingTheMenuMakesItOpen() {
        const navigationBar = new NavigationBarComponent();

        SpyOn(navigationBar, "setState").andCall((newState: any) => {
            Object.keys(newState).forEach(stateKey => {
                navigationBar.state[stateKey] = newState[stateKey];
            })
        });

        navigationBar.toggleMenu();

        Expect(navigationBar.state.isMenuOpen).toBe(true);
    }
}