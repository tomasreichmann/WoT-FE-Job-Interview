import "./Vehicle.css";

/*
  /czech-flag.png
  /czech-Cz06_Kolohousenka.png
  #C9C9B6
  /heavytank.svg
  /lighttank.svg
  /mediumtank.svg
  /tankdestroyer.svg
*/

export default function Vehicle({
  name,
  tier,
  type,
  imageUri,
  isPremium
}: any) {
  return (
    <div className="Vehicle">
      name: {name}
      <br />
      tier: {tier}
      <br />
      type: {type}
      <br />
      imageUri: {imageUri}
      <br />
      isPremium: {String(isPremium)}
    </div>
  );
}
