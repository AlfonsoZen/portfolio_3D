import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

const BlackHole = (props) => {
	const gltf = useGLTF('./src/assets/black_hole/scene.gltf')
	return <primitive {...props} object={gltf.scene} />
}

const BlackHoleCanvas = () => {

	return (
		<Canvas
			camera={{ position: [20, 20, -20], fov: 60 }}
		>
			<ambientLight intensity={0.6} />
			<directionalLight position={[1, 1, 1]} intensity={1} />

			<Suspense fallback={null}>
					<BlackHole
						scale={.05}
					/>
			</Suspense>
			<OrbitControls makeDefault />
		</Canvas>
	)
}

export default BlackHoleCanvas
