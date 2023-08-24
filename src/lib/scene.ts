import * as BABYLON from 'babylonjs';

export const createScene = (canvas:HTMLCanvasElement) => {
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0.9, 0.3, 0.3, 1);

  const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, -20), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, -15), scene);
  light.intensity = 0.7;

  const material = new BABYLON.StandardMaterial("material", scene);
  material.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

  const cube = BABYLON.MeshBuilder.CreateBox("cube", { height: 5, width: 5, depth: 5 }, scene);
  cube.material = material;

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });

  return scene;
}
