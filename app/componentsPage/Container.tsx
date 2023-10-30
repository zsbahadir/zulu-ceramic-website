interface ContainerProps {
  title: string
  children: React.ReactNode
}

function Container (props: ContainerProps) {
  const { title, children } = props

  return (
    <div className='flex my-12'>
      <span className='mr-8 flex content-center'>{title}</span>
      {children}
    </div>
  )
}

export default Container
