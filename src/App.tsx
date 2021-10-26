import React, {
  useState,
  useEffect,
  ReactNode,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import {
  Box,
  Table,
  Text,
  Th,
  Tr,
  Td,
  Button,
  Tbody,
  TableProps,
  TextProps,
  SimpleGrid,
  Center,
  Divider,
  Image,
  Spacer,
  Flex,
} from "@chakra-ui/react";

import {getInvoiceID} from '../src/Api'

  

export default function Example() {



  const [invoiceData, setInvoiceData] = useState<any>()

  

  useEffect(() => {
    async function getInvoice() {
      
      const response = await getInvoiceID()
      
      setInvoiceData(response.data)
    }
    getInvoice()
  }, [getInvoiceID])




  return (
    <>
    <Center w="1000px">
      <Button
        my="40px"
        mx="20px"
        color="white"
        spacing="6"
        allign="center"
        bg="#bd202e"
        fontSize="15px"
        fontWeight="600"
        height="40px"
        width={["98%", "60%", "50%", "336px"]}
        cursor="pointer"
        borderRadius="25px"
        sx={{
          "@media print": {
            display: "none",
          },
        }}
        onClick={() => {
          window.print();
        }}
      >
        Imprimir
      </Button>
      </Center>
      <Box w="1000px" py="30px">
        <Flex>
          <Text
            fontSize="10px"
            ml="40px"
            fontWeight="400"
            fontFamily="sans-serif"
          >
            Aprovado pela IN/RFB nº 736/2007
           
                  
          </Text>
          <Spacer />

          <Text
            textAlign="end"
            fontSize="10px"
            mr="50px"
            fontWeight="400"
            fontFamily="sans-serif"
          >
            1ª via
          </Text>
        </Flex>
        
          <Box paddingBottom="0px" w="900px" mx="40px" mt="px" border="2px">
            <SimpleGrid columns={[2]} gap="8" p="10px">
              <Box flexDir="column" h="100%">
                <Flex pb="10px">
                  <Box w="20%">
                    <Image
                      width="200px"
                      src="https://seeklogo.com/images/R/republica-federativa-do-brazil-logo-3F0D3FD72F-seeklogo.com.png"
                      alt="RepublicaFederativaDoBrasil"
                    />
                  </Box>
                  <Box w="80%" pl="20px" mt="10px" align-content="center">
                    <Text
                      fontFamily="sans-serif"
                      fontSize="13px"
                      fontWeight="600"
                    >
                      MINISTÉRIO DA FAZENDA <br />
                      SECRETARIA DA RECEITA FEDERAL DO BRASIL <br />
                      Documento de Arrecadação de Receitas Federais
                    </Text>
                    <Text
                      fontFamily="sans-serif"
                      fontSize="22px"
                      fontWeight="600"
                    >
                      DARF
                    </Text>
                  </Box>
                </Flex>

                <Table variant="unstyled">
                  <Tr>
                    <TextLine
                      borderTop="1px"
                      acum="01"
                      label="NOME / TELEFONE"
                      text="XERPAY TECNOLOGIA LTDA"
                    ></TextLine>
                  </Tr>
                  <Td>
                    <Text ml="40px" fontSize="13px" fontWeight="600">
                      DARF VÁLIDO PARA PAGAMENTO ATÉ 11/10/2021{" "}
                    </Text>
                    <Text ml="40px" pt="10px" fontSize="13px" fontWeight="600">
                      DOMICÍLIO TRIBUTÁRIO DO CONTRIBUINTE:
                      <br /> SÃO PAULO
                    </Text>
                    <Text ml="40px" pt="10px" fontSize="13px" fontWeight="600">
                      NÃO RECEBER COM RASURAS
                      <br />
                      PIS
                      <br />
                      SENTRY 10/2021
                      <br />
                      11/10/2021
                    </Text>
                  </Td>
                </Table>
              </Box>
              <Box>
                <TextLine
                  acum="02"
                  label="PERÍODO DE APURAÇÃO"
                  text="11/10/2021"
                ></TextLine>
                <TextLine
                  acum="03"
                  label="NÚMERO DO CPF OU CNPJ"
                  text="16.097.303/0001-04"
                ></TextLine>
                <TextLine
                  acum="04"
                  label="CÓDIGO DA RECEITA"
                  text="5434"
                ></TextLine>
                <TextLine
                  acum="05"
                  label="NÚMERO DE REFERÊNCIA"
                  text=""
                ></TextLine>
                <TextLine
                  acum="06"
                  label="DATA DE VENCIMENTO "
                  text="11/10/2021"
                ></TextLine>
                <TextLine
                  acum="07"
                  label="VALOR DO PRINCIPAL"
                  text="20,83"
                ></TextLine>
                <TextLine
                  acum="08"
                  label="VALOR DA MULTA"
                  text="0,00"
                ></TextLine>
                <TextLine
                  acum="09"
                  label="VALOR DOS JUROS E / OU ENCARGOS DL - 1.025/69"
                  text="0,00"
                ></TextLine>
                <TextLine acum="10" label="VALOR TOTAL" text="20,83"></TextLine>
                <TextLine
                  borderBottom="none"
                  acum="11"
                  label=" AUTENTICAÇÃO BANCÁRIA (Somente nas 1ª e 2ª vias)"
                  text=""
                ></TextLine>
              </Box>
            </SimpleGrid>

            <Divider bg="black" marginY="2px" />

            <Center p="10px">
              <Image
                width="100%"
                h="100px"
             //  {invoiceData?.img}
        
                src={'data:image/png;base64,'+invoiceData?.img}
                alt="Código de Barras"
              />
            </Center>
         
        </Box>

        <Divider bg="black" marginY="5rem" borderStyle="dashed" />
        <Flex>
          <Text
            fontSize="10px"
            ml="40px"
            fontWeight="400"
            fontFamily="sans-serif"
          >
            
            Aprovado pela IN/RFB nº 736/2007
          </Text>
          <Spacer />

          <Text
            textAlign="end"
            fontSize="10px"
            mr="50px"
            fontWeight="400"
            fontFamily="sans-serif"
          >
            2ª via
          </Text>
        </Flex>
        <Box paddingBottom="0px" w="900px" mx="40px" mt="px" border="2px">
          <SimpleGrid columns={[2]} gap="8" p="10px">
            <Box flexDir="column" h="100%">
              <Flex pb="10px">
                <Box w="20%">
                  <Image
                    width="200px"
                    src="https://seeklogo.com/images/R/republica-federativa-do-brazil-logo-3F0D3FD72F-seeklogo.com.png"
                    alt="RepublicaFederativaDoBrasil"
                  />
                </Box>
                <Box w="80%" pl="20px" mt="10px" align-content="center">
                  <Text
                    fontFamily="sans-serif"
                    fontSize="13px"
                    fontWeight="600"
                  >
                    MINISTÉRIO DA FAZENDA <br />
                    SECRETARIA DA RECEITA FEDERAL DO BRASIL <br />
                    Documento de Arrecadação de Receitas Federais
                  </Text>
                  <Text
                    fontFamily="sans-serif"
                    fontSize="22px"
                    fontWeight="600"
                  >
                    DARF
                  </Text>
                </Box>
              </Flex>

              <Table variant="unstyled">
                <Tr>
                  <TextLine
                    borderTop="1px"
                    acum="01"
                    label="NOME / TELEFONE"
                    text="XERPAY TECNOLOGIA LTDA"
                  ></TextLine>
                </Tr>
                <Td>
                  <Text ml="40px" fontSize="13px" fontWeight="600">
                    DARF VÁLIDO PARA PAGAMENTO ATÉ 11/10/2021{" "}
                  </Text>
                  <Text ml="40px" pt="10px" fontSize="13px" fontWeight="600">
                    DOMICÍLIO TRIBUTÁRIO DO CONTRIBUINTE:
                    <br /> SÃO PAULO
                  </Text>
                  <Text ml="40px" pt="10px" fontSize="13px" fontWeight="600">
                    NÃO RECEBER COM RASURAS
                    <br />
                    PIS
                    <br />
                    SENTRY 10/2021
                    <br />
                    11/10/2021
                  </Text>
                </Td>
              </Table>
            </Box>
            <Box>
              <TextLine
                acum="02"
                label="PERÍODO DE APURAÇÃO"
                text="11/10/2021"
              ></TextLine>
              <TextLine
                acum="03"
                label="NÚMERO DO CPF OU CNPJ"
                text="16.097.303/0001-04"
              ></TextLine>
              <TextLine
                acum="04"
                label="CÓDIGO DA RECEITA"
                text="5434"
              ></TextLine>
              <TextLine
                acum="05"
                label="NÚMERO DE REFERÊNCIA"
                text=""
              ></TextLine>
              <TextLine
                acum="06"
                label="DATA DE VENCIMENTO "
                text="11/10/2021"
              ></TextLine>
              <TextLine
                acum="07"
                label="VALOR DO PRINCIPAL"
                text="20,83"
              ></TextLine>
              <TextLine acum="08" label="VALOR DA MULTA" text="0,00"></TextLine>
              <TextLine
                acum="09"
                label="VALOR DOS JUROS E / OU ENCARGOS DL - 1.025/69"
                text="0,00"
              ></TextLine>
              <TextLine acum="10" label="VALOR TOTAL" text="20,83"></TextLine>
              <TextLine
                borderBottom="none"
                acum="11"
                label=" AUTENTICAÇÃO BANCÁRIA (Somente nas 1ª e 2ª vias)"
                text=""
              ></TextLine>
            </Box>
          </SimpleGrid>

          <Divider bg="black" marginY="2px" />

          <Center p="10px">
            <Image
              width="100%"
              h="100px"
              src={'data:image/png;base64,'+invoiceData?.img}
              alt="Código de Barras"
            />
          </Center>
        </Box>
      </Box>
    </>
  );
}

interface TextBaseProps extends TextProps {
  label: String;
  text: String;
  acum: Number;
  children: ReactNode;
}
interface TableLineProps extends TableProps {
  children: ReactNode;
}

const TextBase: ForwardRefRenderFunction<HTMLInputElement, TextBaseProps> = ({
  acum,
  label,
  text,
  children,
  ...rest
}: TextBaseProps) => (
  <SimpleGrid
    columns={2}
    spacingY="10px"
    mx="10px"
    p="5px"
    borderBottom="1px"
    {...rest}
  >
    <Flex>
      <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
        {acum}
      </Text>
      <Center>
        <Text
          px="20px"
          fontSize="11px"
          fontWeight="600"
          fontFamily="sans-serif"
        >
          {label}
        </Text>
      </Center>
    </Flex>
    <Center>
      <Text
        px="20px"
        fontSize="11px"
        textAlign="end"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        {text}
      </Text>
    </Center>
  </SimpleGrid>
);

const TableBase: ForwardRefRenderFunction<HTMLInputElement, TableLineProps> = ({
  children,
  ...rest
}: TableLineProps) => <Tr {...rest}>{children}</Tr>;

const TextLine = forwardRef(TextBase);

const TableLine = forwardRef(TableBase);

