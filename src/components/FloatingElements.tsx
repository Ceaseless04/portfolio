'use client'

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="floating-circle"
        style={{
          width: '100px',
          height: '100px',
          top: '20%',
          left: '10%',
          animationDelay: '0s'
        }}
      />
      <div
        className="floating-circle"
        style={{
          width: '60px',
          height: '60px',
          top: '60%',
          right: '20%',
          animationDelay: '-5s'
        }}
      />
      <div
        className="floating-circle"
        style={{
          width: '80px',
          height: '80px',
          bottom: '30%',
          left: '20%',
          animationDelay: '-10s'
        }}
      />
    </div>
  )
}

export default FloatingElements