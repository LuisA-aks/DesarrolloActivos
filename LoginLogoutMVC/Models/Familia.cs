﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Familia
    {
        public int id_Familia { get; set; }
        public string nombre_Familia { get; set; }

     //   public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";


        public string agregar_familia(string nombrefamilia, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_IngresaFamilia @NombreFamilia";
                mycmd.Parameters.Add("@NombreFamilia", SqlDbType.VarChar, 150).Value = nombrefamilia;
                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    mensaje = rdr["Mensaje"].ToString();
                    //reto codigo
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
            }
            return mensaje;
        }
    }
}