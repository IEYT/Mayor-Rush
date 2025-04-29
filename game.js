async function main() {
  let pyodide = await loadPyodide();
  pyodide._api._skip_unwind_fatal_error = true; // Add the flag here
  await pyodide.loadPackage("pygame-ce");
  return pyodide;
}
main();
console.log("Pygame loads, YAY!");
let sdl2Canvas = document.createElement("canvas");
sdl2Canvas.id = "canvas";
pyodide.canvas.setCanvas2D(sdl2Canvas);
pyodide.runPython(`
    import asyncio
    import pygame

    pygame.init()

    fps = 60

    async def run_game():
        while True:
            WIDTH, HEIGHT = 500, 500
            screen = pygame.display.set_mode((WIDTH, HEIGHT))
            ORANGE = (255,165,0)
            screen.fill(ORANGE)
            await asyncio.sleep(1 / fps)
    `);
