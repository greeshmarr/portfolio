import { useColorPainting } from '../hooks/useColorPainting';

export const ColorPaintingCanvas = () => {
  const { canvasRef } = useColorPainting();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        mixBlendMode: 'multiply',
        opacity: 0.8
      }}
    />
  );
};
