declare class App {
    /**
     * The Discord bot instance
     */
    private __bot;
    /**
     * Store the created modules
     */
    private __modules;
    /**
     * Create the application
     */
    constructor();
    exec(): void;
    bootModules(): void;
}
export default App;
