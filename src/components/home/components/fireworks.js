import anime from "animejs"

const fireworks = canvasEl => {
  const ctx = canvasEl.getContext("2d")
  const numberOfParticules = Number(window.location.href.split("?")[1]) || 40


  function updateCoords(e) {
    const pointerX = e.clientX || e.touches[0].clientX
    const pointerY = e.clientY || e.touches[0].clientY
    const placeData = {
      pointerX,
      pointerY,
    }
    return placeData
  }
  function createCircle(x, y) {
    const p = {}
    p.x = x
    p.y = y
    p.color = "#3e4347"
    p.radius = 0.1
    p.alpha = 0.1
    p.lineWidth = 6
    p.draw = () => {
      ctx.globalAlpha = p.alpha
      ctx.beginPath()
      ctx.arc(p.x, p.y, ((Math.exp(p.radius*Math.sin((p.radius)))**2))**2, 0, 2 * Math.PI, true)
      ctx.lineWidth = p.lineWidth
      ctx.strokeStyle = p.color
      ctx.stroke()
      ctx.globalAlpha = 1
    }
    return p
  }

  function renderParticule(anim) {
    // eslint-disable-next-line no-restricted-syntax
    for (const row of anim.animatables) {
      row.target.draw()
    }
  }
  function animateParticules(x, y) {
    const circle = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfParticules/2; i++) {
      circle.push(createCircle(x, y))
    }
    anime
      .timeline()
      .add({
        targets: circle,
        radius: {
          value: anime.stagger(2),
          easing: "easeOutQuad"
        },
        lineWidth: 0,
        duration: 2000000,
        easing: "easeOutQuint",
        update: renderParticule,
        offset: 0,
      })
  }
  // canvas
  function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2
    canvasEl.height = window.innerHeight * 2
    canvasEl.style.width = `${window.innerWidth}px`
    canvasEl.style.height = `${window.innerHeight}px`
    canvasEl.getContext("2d").scale(2, 2)
  }
  // render index
  const render = anime({
    duration: Infinity,
    update() {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    },
  })

  return {
    render,
    setCanvasSize,
    animateParticules,
    updateCoords,
  }
}

export default fireworks
