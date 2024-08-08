import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationsState,
  item,
  size,
}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
  >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationsState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'lagrge'`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
