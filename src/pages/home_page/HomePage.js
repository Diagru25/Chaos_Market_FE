import Input from '@base/Input'
import Button from '@base/Button'

const HomePage = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') console.log('enter')
  }

  return (
    <div style={{ padding: '50px' }}>
      <Input
        placeholder='Name'
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <Button type='success' variant='outline'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, totam!
      </Button>
    </div>
  )
}

export default HomePage
