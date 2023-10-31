import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";

const maptilerProvider = maptiler("msK8RVChdLQ9X5k8bOeP", "streets");
function MyMap() {
  return (
    <div className="map-div">
      <Map
        provider={maptilerProvider}
        height={700}
        defaultCenter={[48.17272, -116.59464]}
        defaultZoom={9}
        twoFingerDrag={true}
        width={"100vw"}
        dprs={[1, 2]}
        mouseEvent={"false"}
      >
        <ZoomControl />
        <Marker color={`#23403b`} width={50} anchor={[48.17271, -116.59464]} />
      </Map>
    </div>
  );
}
export default MyMap;
