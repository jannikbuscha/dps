/**
 * In-frame heads-up display: the LinkedIn logo (top-left) and the TU Dresden
 * logo (top-right). tud.svg renders at its natural size; linkedin.svg is
 * scaled to the same height.
 */
const B = import.meta.env.BASE_URL;

export default function Hud() {
  return (
    <div className="hud">
      <img className="hud-li" src={`${B}linkedin.svg`} alt="LinkedIn" />
      <img className="hud-tud" src={`${B}tud.svg`} alt="TU Dresden" />
    </div>
  );
}
