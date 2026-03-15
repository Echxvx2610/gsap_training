import gsap from 'gsap'

function GsapStaggers() {
    const startAnimations = () => {
        const tl = gsap.timeline()
        tl.to('.stagger-box', {
            x: window.innerWidth - 400,
            y: 0,
            duration: 1,
            stagger: 0.1
        })
        tl.to('.stagger-box2', {
            x: window.innerWidth - 400,
            y: 0,
            duration: 1,
            stagger: 0.1
        })
    }

    const stopAnimations = () => {
        const tl = gsap.timeline()
        tl.to('.stagger-box', {
            x: 700,
            y: 0,
            duration: 1,
            opacity: 0,
            stagger: {
                repeat: 1,
                from: "start",
                each: 1 // each o amount es lo mismo, se refiere al tiempo entre cada animacion
            },
            ease: "back.in",
            overwrite: "auto"
            
        })
        tl.to('.stagger-box2', {
            x: 700,
            y: 0,
            duration: 1,
            opacity: 0,
            stagger: {
                from: "start",
                each: 1 // each o amount es lo mismo, se refiere al tiempo entre cada animacion
            },
            ease: "back.in",
            overwrite: "auto"
        })

    }

    
    return (
        <>
            <div>
                <h1>Ejemplo de Staggers</h1>
                <div className='container'>
                    <div className='box stagger-box'></div>
                    <div className='box stagger-box2'></div>
                    <div className='box stagger-box'></div>
                </div>
                <div className='container'>
                    <div className='box stagger-box2'></div>
                    <div className='box stagger-box'></div>
                    <div className='box stagger-box2'></div>
                </div>
                <div className='container-btn'>
                    <button className='btn' onClick={startAnimations}>Animar</button>
                    <button className='btn' onClick={stopAnimations}>Reiniciar</button>
                </div>
            </div>

        </>
    )
}

export default GsapStaggers