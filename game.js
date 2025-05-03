async function main() {
  let pyodide = await loadPyodide();

  pyodide._api._skip_unwind_fatal_error = true; // Add the flag here

  await pyodide.loadPackage("pygame-ce");

  // let sdl2Canvas = document.createElement("canvas");
  // sdl2Canvas.id = "canvas";
  // document.getElementsByTagName('body')[0].appendChild(sdl2Canvas);
  // pyodide.canvas.setCanvas2D(sdl2Canvas);

  let sdl2Canvas = document.getElementById("canvas");
  pyodide.canvas.setCanvas2D(sdl2Canvas);

  // pyodide.runPython(`
  pyodide.runPythonAsync(`
  import asyncio
  import pygame
  
  FPS = 60
  
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
  
          screen.fill("green")
          pygame.display.flip()
  
          clock.tick(FPS)
          await asyncio.sleep(0)  # should be inside loop
  
      pygame.quit()
  
  run_game()  
    `);
}
main();
console.log("Pygame loads, YAY!");
