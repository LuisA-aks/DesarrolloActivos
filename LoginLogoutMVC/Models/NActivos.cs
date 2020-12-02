using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data.SqlTypes;
using System.Data;

namespace LoginLogoutMVC.Models
{
    

    public class NActivos
    {
    

        public Excel agregar_activoluis(int Asignado_a,int NACTIVO,string SERIE,string Adiquisicion,string Garantia,int MARCA,int Proveedor,string ORDEN_DE_COMPRA,string COSTO,string Aseguramiento,string DESCRIPCION, int Incluido_poliza,int user, string conexionF)
        {
          
            Excel l;
            Excel v = new Excel();
            SqlConnection myConn = new SqlConnection(conexionF);
            //SqlConnection myConn = new SqlConnection("Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True");
            try
            {
            
            myConn.Open();
            var mycmd = myConn.CreateCommand();
            mycmd.CommandText = "Execute SP_IngresaActivosExcel @ubicacion_bodega,@placa_Activo,@serie_Activo,@id_EstadoActivo,@fechaAdqui_Activo,@fechaVencimientoGarantia_Activo,@id_Marca,@id_Proveedor,@id_Usuario,@id_licitacion,@precio_activo,@seguro_activo,@descripcion,@es_poliza";
            mycmd.Parameters.Add("@ubicacion_bodega", SqlDbType.Int, 150).Value = Asignado_a;
            mycmd.Parameters.Add("@placa_Activo", SqlDbType.VarChar, 150).Value = NACTIVO;
            mycmd.Parameters.Add("@serie_Activo", SqlDbType.VarChar, 150).Value = SERIE;
            mycmd.Parameters.Add("@id_EstadoActivo", SqlDbType.Int, 150).Value = 3;
            mycmd.Parameters.Add("@fechaAdqui_Activo", SqlDbType.VarChar, 150).Value = Adiquisicion;
            mycmd.Parameters.Add("@fechaVencimientoGarantia_Activo", SqlDbType.VarChar, 150).Value = Garantia;
            mycmd.Parameters.Add("@id_Marca", SqlDbType.Int, 150).Value = MARCA;
            mycmd.Parameters.Add("@id_Proveedor", SqlDbType.Int, 150).Value = Proveedor;
            mycmd.Parameters.Add("@id_Usuario", SqlDbType.Int, 150).Value = user;
            mycmd.Parameters.Add("@id_licitacion", SqlDbType.VarChar, 150).Value = ORDEN_DE_COMPRA;
            mycmd.Parameters.Add("@precio_activo", SqlDbType.VarChar, 150).Value = COSTO;
            mycmd.Parameters.Add("@seguro_activo", SqlDbType.Int, 150).Value = Aseguramiento;
            mycmd.Parameters.Add("@descripcion", SqlDbType.VarChar, 150).Value = DESCRIPCION;
            mycmd.Parameters.Add("@es_poliza", SqlDbType.Int, 150).Value = Incluido_poliza;

            
            SqlDataReader rdr = mycmd.ExecuteReader();
            while (rdr.Read())
            {
                Excel lx = new Excel()
                {
                    mensaje = rdr["Mensaje"].ToString(),
                    placa_Activo = rdr["Placa"].ToString(),
                    descripcion = rdr["Descripcion"].ToString(),

                };
                v = lx;
              
              
            }
            }
            catch (Exception EX)
            {
                EX.GetBaseException();
            }
            finally
            {
                myConn.Close();
            }

            return v;
        }
           
        }

       
        

        

    }

    
