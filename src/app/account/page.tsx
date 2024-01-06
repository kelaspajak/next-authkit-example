// import { getUser } from "../../auth";
import { Text, Heading, TextFieldInput, Flex, Box } from "@radix-ui/themes";

export default async function AccountPage() {


  return (
    <>
      <Flex direction="column" gap="2" mb="7">
        <Heading size="8" align="center">
          Account details
        </Heading>
        <Text size="5" align="center" color="gray">
          Below are your account details
        </Text>
      </Flex>

      
        <Flex
          direction="column"
          gap="3"
          style={{ width: 400 }}
          justify="center"
        >
          
            <Flex asChild align="center" gap="6">
              <label>
                <Text weight="bold" size="3" style={{ width: 100 }}>
                  less suumer
                </Text>

                <Box grow="1">
                  <TextFieldInput value={"less"} readOnly />
                </Box>
              </label>
            </Flex>
        </Flex>
    </>
  );
}
