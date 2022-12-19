import { 
  SimpleGrid,
  Box,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  } from '@chakra-ui/react'
import NextLink from 'next/link'
const Index: React.FC = () => {
  return (
    <>
      <SimpleGrid height='100%' columns={2} spacing={0}>
        <Box height='100vh'>
        <Image
          src='/images/signin/loginPartImg.png'
          alt='loginPartTopImage'
        />

        <Flex
              align={'center'}
              justify={'center'}>
              <Stack width={'436px'} spacing={8} mx={'auto'} my={'auto'} maxW={'lg'} py={0} px={0}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Sign In</Heading>
                  <Text fontSize={'lg'} color={'gray.600'}>
                    Sign in to stay connected
                  </Text>
                </Stack>
                <Box>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'#3A57E8'}>Forgot password?</Link>
                      </Stack>
                      <Center>
                        <Button
                          bg={'#3A57E8'}
                          width={'188px'}
                          color={'white'}
                          _hover={{
                            bg: '#3A57E8',
                          }}>
                          Sign in
                        </Button>
                      </Center>
                      <Center>
                        <Text fontSize={'lg'} color={'#232D42'}>
                          or sign in with other accounts?
                        </Text>
                      </Center>
                      <Center>
                        <Flex  gap='5'>
                          <Link as={NextLink} href='/home'>
                            <Image
                              borderRadius='full'
                              boxSize='30px'
                              src='/images/signin/Gmail.png'
                              alt='Dan Abramov'
                              onClick={() => console.log('you click image')}
                            />
                          </Link>
                          <Link as={NextLink} href='/home'>
                            <Image
                                borderRadius='full'
                                boxSize='30px'
                                src='/images/signin/Facebook.png'
                                alt='Dan Abramov'
                                onClick={() => console.log('you click image')}
                              />
                          </Link>
                          <Link as={NextLink} href='/home'>
                            <Image
                                borderRadius='full'
                                boxSize='30px'
                                src='/images/signin/Instagram.png'
                                alt='Dan Abramov'
                                onClick={() => console.log('you click image')}
                              />
                          </Link>
                          <Link as={NextLink} href='/home'>
                            <Image
                                borderRadius='full'
                                boxSize='30px'
                                src='/images/signin/LinkedIn.png'
                                alt='Dan Abramov'
                                onClick={() => console.log('you click image')}
                              />
                          </Link>
                        </Flex>
                      </Center>
                      <Center>
                      <Text fontSize={'lg'} color={'#232D42'}>
                        Don’t have an account? <Link color={'#3A57E8'}>Click here to sign up.</Link>
                      </Text>
                      </Center>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
        </Box>

        <Box>
        <Image
          height='100vh'
          width='100vw'
          src='/images/signin/loginSideImg.png'
          alt='loginPartTopImage'
        />
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Index