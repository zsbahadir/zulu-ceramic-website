//import Next
import Link from 'next/link'

//import components
import Card from '../card/Card'
import HeaderLine from '../layout/HeaderLine'

interface SectionProps {
  title: string
  images: any
  cols: number
  gap: number
  text_size: string
  section?: string
  id: string | undefined
  target?: string
  hasLine?: boolean
}

function Section (props: SectionProps) {
  const { title, images, cols, gap, id, text_size, target, hasLine } = props

  return (
    <div id={id}>
      <HeaderLine hasLabel title={title} hasLine={hasLine} />

      <div className='flex justify-center'>
        {cols === 2 ? (
          <div className={`flex justify-between w-1/2 my-8 `}>
            {images.map((image: any) => (
              <div key={image.id} className='m-8'>
                <Link href={`/shopping#${image.id}`} target={target}>
                  <Card
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    label={image.label}
                    name={image.name}
                    price={image.price}
                    text_size={text_size}
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid grid-cols-${cols} gap-${gap} mx-20 my-8 `}>
            {images.map((image: any) => (
              <div key={image.id} className='m-8'>
                <Link href={`/shopping/${image.id}`} target={'_blank'}>
                  <Card
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    label={image.label}
                    name={image.name}
                    price={image.price}
                    text_size={text_size}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Section
