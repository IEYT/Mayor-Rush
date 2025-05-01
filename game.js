async function main() {
  let pyodide = await loadPyodide();
  pyodide._api._skip_unwind_fatal_error = true; // Add the flag here
  await pyodide.loadPackage("pygame-ce");
  let sdl2Canvas = document.createElement("canvas");
  sdl2Canvas.id = "canvas";
  pyodide.canvas.setCanvas2D(sdl2Canvas);
  pyodide.runPython(`
    import asyncio  
    import pygame  

    async def run_game():  
        # pygame setup
        pygame.init()
        screen = pygame.display.set_mode((1280, 720))
        clock = pygame.time.Clock()
        running = True

        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False

            screen.fill("purple")


            pygame.display.flip()


        pygame.quit()
        await asyncio.sleep(1 / fps)



    `);
  return pyodide;
}
main();
console.log("Pygame loads, YAY!");
