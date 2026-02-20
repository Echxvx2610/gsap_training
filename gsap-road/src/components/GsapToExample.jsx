import gsap from 'gsap'

function GsapToExample() {
    const triangleAnimation = () => {
        gsap.to('.triangle-1', {
            x: 40,
            rotation: 180,
            duration: 2,
            ease: 'power1.out',
            yoyo: true,
            repeat: -1,
            delay: 1
        })
        gsap.to('.triangle-2', {
            y: 20,
            duration: 2,
            ease: 'power1.out',
            yoyo: true,
            repeat: -1,
            delay: 1
        })
        gsap.to('.triangle-3', {
            x: -40,
            rotation: -180,
            duration: 2,
            ease: 'power1.out',
            yoyo: true,
            repeat: -1,
            delay: 1
        })
    }

    const circleAnimation = () => {
        gsap.from(".circle-1", {
            x: 100,
            duration: 1,
            delay: 0.2,
            ease: 'power1.in'
        });
        gsap.from(".circle-2", {
            x: 100,
            duration: 1,
            delay: 0.4,
            ease: 'power1.in'
        });
        gsap.from(".circle-3", {
            x: 100,
            duration: 1,
            delay: 0.6,
            ease: 'power1.in'
        });
    }

    const squareAnimation = () => {
        let tl = gsap.timeline()
        tl.to('.square-1', {
            x: 105,
            y: 90,
            rotation: 180,
            duration: 1,
            ease: 'power1.out',
        })
            .to('.square-3', {
                x: 40,
                y: 90,
                duration: 1,
                ease: 'power1.out',
            })
            .to('.square-2', {
                x: 70,
                y: 90,
                rotation: -180,
                duration: 1,
                ease: 'power3.out',
            })
    }

    const stopAnimations = () => {
        // Detener todas las animaciones de los triángulos y resetear su posición
        gsap.killTweensOf('.triangle-1')
        gsap.killTweensOf('.triangle-2')
        gsap.killTweensOf('.triangle-3')

        // Opcional: resetear la posición a su estado original
        gsap.set(['.triangle-1', '.triangle-2', '.triangle-3'], { x: 0, y: 0, rotation: 0 })
        gsap.killTweensOf('.circle-1')
        gsap.killTweensOf('.circle-2')
        gsap.killTweensOf('.circle-3')
        gsap.set(['.circle-1', '.circle-2', '.circle-3'], { x: 0, y: 0, rotation: 0 })

        // Detener todas las animaciones de los cuadrados y resetear su posición
        gsap.killTweensOf('.square-1')
        gsap.killTweensOf('.square-2')
        gsap.killTweensOf('.square-3')
        gsap.set(['.square-1', '.square-2', '.square-3'], { x: 0, y: 0, rotation: 0 })
    }
    return (
        <>
            <div className='container'>
                <fieldset>
                    <legend>Triángulos</legend>
                    <div className='triangle-1'></div>
                    <div className='triangle-2'></div>
                    <div className='triangle-3'></div>
                </fieldset>
                <p>Uso basico de <strong>gsap.to</strong>,definir propiedades de animacion, yoyo, repeat, delay, ease. Con esto le decimos hacia donde se mueve, cuanto dura, si se repite, si vuelve, y como se mueve.</p>
            </div>
            <div className='container'>
                <fieldset>
                    <legend>Círculos</legend>
                    <div className='circle-1'></div>
                    <div className='circle-2'></div>
                    <div className='circle-3'></div>
                </fieldset>
                <p>Uso de <strong>gsap.from</strong>esta es la animacion contraria a gsap.to, en vez de decirle hacia donde se mueve, le decimos desde donde se mueve. en una cordenada relativa al elemento. es decir todos los circulos empiezan con un valor de x:100 y regresan a su posicion original (0,0)</p>
            </div>
            <div className='container'>
                <fieldset>
                    <legend>Cuadrados</legend>
                    <div className='square-1'></div>
                    <div className='square-2'></div>
                    <div className='square-3'></div>
                </fieldset>
            </div>
            <div className='container-btn'>
                {/* usamos una funcion anonima para ejecutar ambas funciones */}
                <button className='btn' onClick={() => { triangleAnimation(); circleAnimation(); squareAnimation(); }}>Animar</button>
                <button className='btn' onClick={stopAnimations}>Detener</button>
            </div>
        </>
    )
}

export default GsapToExample