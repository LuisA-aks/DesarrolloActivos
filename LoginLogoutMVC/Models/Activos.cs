using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data.SqlTypes;
using System.Data;

namespace LoginLogoutMVC.Models
{
    

    public class Activos
    {
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
      //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";


        //public string UbicacionActivo { get; set; }
        //public string SerieActivo { get; set; }
        //public int EstadoActivo { get; set; }
        //public string FechaAdquisicion { get; set; }
        //public string FechaVencimientoGarantia { get; set; }
        //public int IdMarca { get; set; }
        //public int IdProveedor { get; set; }
        //public int IdLicitacion { get; set; }
        //public string PlacaActivo { get; set; }
        //public string PrecioActivo { get; set; }
        //public string SeguroActivo { get; set; }



        public string agregar_activo(int ubicacion, string placa, string serie, string fechavencimiento, string fechaadquisicion, int marca,
            int proveedor, int iduser, string licitacion, string precio, int seguro,int es_poliza, string descripcion, string _descripcion, string conexionF)
        {
            string mensaje = "";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_IngresaActivos @ubicacion_bodega, @placa_Activo, @serie_Activo,@id_EstadoActivo, @fechaAdqui_Activo, @fechaVencimientoGarantia_Activo, @id_Marca, @id_Proveedor,@id_Usuario, @id_licitacion, @precio_activo, @seguro_activo,@descripcion,@es_poliza";
                mycmd.Parameters.Add("@ubicacion_bodega", SqlDbType.Int, 150).Value = ubicacion;
                mycmd.Parameters.Add("@placa_Activo", SqlDbType.VarChar, 150).Value = placa;
                mycmd.Parameters.Add("@serie_Activo", SqlDbType.VarChar, 150).Value = serie;
                mycmd.Parameters.Add("@id_EstadoActivo", SqlDbType.Int, 150).Value = 3;
                mycmd.Parameters.Add("@fechaAdqui_Activo", SqlDbType.VarChar, 150).Value = fechaadquisicion;
                mycmd.Parameters.Add("@fechaVencimientoGarantia_Activo", SqlDbType.VarChar, 150).Value = fechavencimiento;
                mycmd.Parameters.Add("@id_Marca", SqlDbType.Int, 150).Value = marca;
                mycmd.Parameters.Add("@id_Proveedor", SqlDbType.Int, 150).Value = proveedor;
                mycmd.Parameters.Add("@id_Usuario", SqlDbType.Int, 150).Value = iduser;
                mycmd.Parameters.Add("@id_licitacion", SqlDbType.VarChar, 150).Value = licitacion;
                mycmd.Parameters.Add("@precio_activo", SqlDbType.VarChar, 150).Value = precio;
                mycmd.Parameters.Add("@seguro_activo", SqlDbType.Int, 150).Value = seguro;/// lo puse quemado solo un seguro tenemos
                mycmd.Parameters.Add("@descripcion", SqlDbType.VarChar, 150).Value = _descripcion;
                mycmd.Parameters.Add("@es_poliza", SqlDbType.Int, 150).Value = es_poliza;


                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                 mensaje= rdr["Mensaje"].ToString();
                    //reto codigo

       
                }
            }catch (Exception EX)
            {
                EX.GetBaseException();
            }
            finally
            {
                myConn.Close();
            }
        }
            return mensaje;
        }

        

        

    }

    
}