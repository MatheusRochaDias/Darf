import { useCallback } from 'react'
import axios from 'axios'
import { parse } from 'path'



    export async function getInvoiceID() {
          try {
            const response = await axios.post(
              `http://localhost:8000/api/v1/darf/generator`, {
               
             
                  code_rfb: "5434",
                  taxpayer_code: "66342797000113",
                  due_date: "2021-10-26",
                  polling: "2021-10-26",
                  value: "122.99"
            
                }
              
            )

            return {
              data: JSON.parse(response.data.detail.replaceAll("'", '"')),
            }
          } catch (err: any) {
            console.log(err)
            return { data: null, error: err.response.data?.detail }
          }
        }

      