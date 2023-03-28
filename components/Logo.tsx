import Image from 'next/image'

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        width={50}
        height={50}
        src="https://static.vecteezy.com/system/resources/previews/000/615/271/large_2x/letter-m-vector-icons-such-logos-template.jpg"
        alt="brand logo"
      ></Image>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
export default Logo
