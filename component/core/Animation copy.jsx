import { useEffect, useRef, useState } from 'react';


export const Animation = (props) => {
    const ref = useRef(null);
    const [lottie, setLottie] = useState(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    }, []);

    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                // path to your animation file, place it inside public folder
                path: props.animationData,
            });

            return () => animation.destroy();
        }
    }, [lottie, props.animationData]);

    return (
        <div style={{
            height: parseInt(props.height),
            width: parseInt(props.width),
            margin: "auto"
        }} ref={ref} />
    );
};

export default Animation;