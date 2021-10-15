import React, {
  useState,
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
  Tbody,
  TableProps,
  TextProps,
  SimpleGrid,
  Divider,
  Image,
  Spacer,
  Flex,
} from "@chakra-ui/react";

export default function Example() {
  return (
    <Box w="1000px" paddingTop="30px">
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
      <Box
        paddingBottom="0px"
        w="900px"
        ml="40px"
        mr="40px"
        mt="px"
        border="2px"
      >
        <SimpleGrid columns={[2]} gap="8">
          <Box flexDir="column" h="100%">
            <Flex borderBottom="2px" pb="10px">
              <Box w="20%">
                <Image
                  width="200px"
                  src="https://lh3.googleusercontent.com/proxy/OVwLkhfDMuAa3QFxjy5Kw4NQikSHylUtPKS3941z8g-2pRS5oo_x3RbfO3-d9__VP6_XcMAIHyN69eqMx2t8S9qXOUxloeNbwcvsgAir5M-S6uY0J7lHR_yivyhr"
                  alt="RepublicaFederativaDoBrasil"
                />
              </Box>
              <Box w="80%" pl="20px" mt="10px" align-content="center">
                <Text fontFamily="sans-serif" fontSize="14px" fontWeight="700">
                  MINISTÉRIO DA FAZENDA <br />
                  SECRETARIA DA RECEITA FEDERAL DO BRASIL <br />
                  Documento de Arrecadação de Receitas Federais
                </Text>
                <Text fontFamily="sans-serif" fontSize="22px" fontWeight="600">
                  DARF
                </Text>
              </Box>
            </Flex>

            <Table variant="unstyled">
              <TableLine>
                <Td>
                  <Flex ml="70px">
                    {" "}
                    <Text
                      fontFamily="sans-serif"
                      fontSize="20px"
                      fontWeight="600"
                    >
                      01{" "}
                    </Text>
                    <TextLine lineHeight="1.2">
                      {" "}
                      NOME / TELEFONE <br /> XERPAY TECNOLOGIA LTDA
                    </TextLine>
                  </Flex>
                </Td>
              </TableLine>
              <Td>
                <TextLine ml="90px">
                  {" "}
                  DARF VÁLIDO PARA PAGAMENTO ATÉ 11/10/2021{" "}
                </TextLine>
                <TextLine ml="90px" pt="20px">
                  DOMICÍLIO TRIBUTÁRIO DO CONTRIBUINTE:
                  <br /> SÃO PAULO
                </TextLine>
                <TextLine ml="90px" pt="20px">
                  NÃO RECEBER COM RASURAS
                  <br />
                  PIS
                  <br />
                  SENTRY 10/2021
                  <br />
                  11/10/2021
                </TextLine>

                <TextLine></TextLine>
              </Td>
            </Table>
          </Box>
          <Box>
            <SimpleGrid columns={2} pr="10px" pt="30px" spacingY="10px">
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  02
                </Text>
                <TextLine mt="7px">PERÍODO DE APURAÇÃO</TextLine>
              </Flex>
              <TextLine mt="7px"> 11/10/2021</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  03
                </Text>
                <TextLine mt="7px">NÚMERO DO CPF OU CNPJ </TextLine>
              </Flex>
              <TextLine mt="7px"> 5434</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  04
                </Text>
                <TextLine mt="7px">CÓDIGO DA RECEITA</TextLine>
              </Flex>
              <TextLine mt="7px"> </TextLine>

              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  05
                </Text>
                <TextLine mt="7px">NÚMERO DE REFERÊNCIA</TextLine>
              </Flex>
              <TextLine mt="7px"> 11/10/2021</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  06
                </Text>
                <TextLine mt="7px">DATA DE VENCIMENTO</TextLine>
              </Flex>
              <TextLine mt="7px"> 20,83</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  07
                </Text>
                <TextLine mt="7px">VALOR DO PRINCIPAL</TextLine>
              </Flex>
              <TextLine mt="7px"> 16.097.303/0001-04</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  08
                </Text>
                <TextLine mt="7px">VALOR DA MULTA</TextLine>
              </Flex>
              <TextLine mt="7px"> 0,00</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  09
                </Text>
                <TextLine mt="0px">
                  VALOR DOS JUROS E / OU ENCARGOS DL - 1.025/69
                </TextLine>
              </Flex>
              <TextLine mt="7px"> 0,00</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  10
                </Text>
                <TextLine mt="7px">VALOR TOTAL</TextLine>
              </Flex>
              <TextLine mt="7px"> 20,83</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  11
                </Text>
                <TextLine mt="7px">AUTENTICAÇÃO BANCÁRIA</TextLine>
              </Flex>
              <TextLine mt="7px"> (Somente nas 1ª e 2ª vias)</TextLine>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Divider bg="black" marginY="1rem" />

        <Box p="10px">
          <Image
            width="2000px"
            h="100px"
            src="https://www.automaclick.com.br/image/Blog/Qual%20o%20Produto%201.png"
            alt="RepublicaFederativaDoBrasil"
          />
        </Box>
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
      <Box
        paddingBottom="0px"
        w="900px"
        ml="40px"
        mr="40px"
        mt="px"
        border="2px"
      >
        <SimpleGrid columns={[2]} gap="8">
          <Box flexDir="column" h="100%">
            <Flex borderBottom="2px" pb="10px">
              <Box w="20%">
                <Image
                  width="200px"
                  src="https://lh3.googleusercontent.com/proxy/OVwLkhfDMuAa3QFxjy5Kw4NQikSHylUtPKS3941z8g-2pRS5oo_x3RbfO3-d9__VP6_XcMAIHyN69eqMx2t8S9qXOUxloeNbwcvsgAir5M-S6uY0J7lHR_yivyhr"
                  alt="RepublicaFederativaDoBrasil"
                />
              </Box>
              <Box w="80%" pl="20px" mt="10px" align-content="center">
                <Text fontFamily="sans-serif" fontSize="14px" fontWeight="700">
                  MINISTÉRIO DA FAZENDA <br />
                  SECRETARIA DA RECEITA FEDERAL DO BRASIL <br />
                  Documento de Arrecadação de Receitas Federais
                </Text>
                <Text fontFamily="sans-serif" fontSize="22px" fontWeight="600">
                  DARF
                </Text>
              </Box>
            </Flex>

            <Table variant="unstyled">
              <TableLine>
                <Td>
                  <Flex ml="70px">
                    {" "}
                    <Text
                      fontFamily="sans-serif"
                      fontSize="20px"
                      fontWeight="600"
                    >
                      01{" "}
                    </Text>
                    <TextLine lineHeight="1.2">
                      {" "}
                      NOME / TELEFONE <br /> XERPAY TECNOLOGIA LTDA
                    </TextLine>
                  </Flex>
                </Td>
              </TableLine>
              <Td>
                <TextLine ml="90px">
                  {" "}
                  DARF VÁLIDO PARA PAGAMENTO ATÉ 11/10/2021{" "}
                </TextLine>
                <TextLine ml="90px" pt="20px">
                  DOMICÍLIO TRIBUTÁRIO DO CONTRIBUINTE:
                  <br /> SÃO PAULO
                </TextLine>
                <TextLine ml="90px" pt="20px">
                  NÃO RECEBER COM RASURAS
                  <br />
                  PIS
                  <br />
                  SENTRY 10/2021
                  <br />
                  11/10/2021
                </TextLine>

                <TextLine></TextLine>
              </Td>
            </Table>
          </Box>
          <Box>
            <SimpleGrid columns={2} pr="10px" pt="30px" spacingY="10px">
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  02
                </Text>
                <TextLine mt="7px">PERÍODO DE APURAÇÃO</TextLine>
              </Flex>
              <TextLine mt="7px"> 11/10/2021</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  03
                </Text>
                <TextLine mt="7px">NÚMERO DO CPF OU CNPJ </TextLine>
              </Flex>
              <TextLine mt="7px"> 5434</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  04
                </Text>
                <TextLine mt="7px">CÓDIGO DA RECEITA</TextLine>
              </Flex>
              <TextLine mt="7px"> </TextLine>

              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  05
                </Text>
                <TextLine mt="7px">NÚMERO DE REFERÊNCIA</TextLine>
              </Flex>
              <TextLine mt="7px"> 11/10/2021</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  06
                </Text>
                <TextLine mt="7px">DATA DE VENCIMENTO</TextLine>
              </Flex>
              <TextLine mt="7px"> 20,83</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  07
                </Text>
                <TextLine mt="7px">VALOR DO PRINCIPAL</TextLine>
              </Flex>
              <TextLine mt="7px"> 16.097.303/0001-04</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  08
                </Text>
                <TextLine mt="7px">VALOR DA MULTA</TextLine>
              </Flex>
              <TextLine mt="7px"> 0,00</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  09
                </Text>
                <TextLine mt="0px">
                  VALOR DOS JUROS E / OU ENCARGOS DL - 1.025/69
                </TextLine>
              </Flex>
              <TextLine mt="7px"> 0,00</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  10
                </Text>
                <TextLine mt="7px">VALOR TOTAL</TextLine>
              </Flex>
              <TextLine mt="7px"> 20,83</TextLine>
              <Flex>
                <Text fontFamily="sans-serif" fontSize="20px" fontWeight="600">
                  11
                </Text>
                <TextLine mt="7px">AUTENTICAÇÃO BANCÁRIA</TextLine>
              </Flex>
              <TextLine mt="7px"> (Somente nas 1ª e 2ª vias)</TextLine>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Divider bg="black" marginY="1rem" />

        <Box p="10px">
          <Image
            width="2000px"
            h="100px"
            src="https://www.automaclick.com.br/image/Blog/Qual%20o%20Produto%201.png"
            alt="RepublicaFederativaDoBrasil"
          />
        </Box>
      </Box>
    </Box>
  );
}

interface TextBaseProps extends TextProps {
  children: ReactNode;
}
interface TableLineProps extends TableProps {
  children: ReactNode;
}

const TextBase: ForwardRefRenderFunction<HTMLInputElement, TextBaseProps> = ({
  children,
  ...rest
}: TextBaseProps) => (
  <Text
    fontSize="11px"
    pl="10px"
    pr="20px"
    fontWeight="600"
    fontFamily="sans-serif"
    {...rest}
  >
    {children}
  </Text>
);

const TableBase: ForwardRefRenderFunction<HTMLInputElement, TableLineProps> = ({
  children,
  ...rest
}: TableLineProps) => (
  <Tr borderBottom="2px" {...rest}>
    {children}
  </Tr>
);

const TextLine = forwardRef(TextBase);

const TableLine = forwardRef(TableBase);
