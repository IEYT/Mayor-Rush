async function loadPyodide() {
  let pyodide = await loadPyodide();
  pyodide._api._skip_unwind_fatal_error = true; // Add the flag here
  await pyodide.loadPackage("pygame-ce");
  return pyodide;
}
console.log("Pygame loads, YAY!");
