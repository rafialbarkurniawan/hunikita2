import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/beranda/Card";
import Search from "../components/beranda/Search";
import Footer from "../components/Footer";
import Selengkapnya from "../components/beranda/Selengkapnya";
import Navbar from "../components/Navbar";
import Carousel from "../components/beranda/Carousel";

const Beranda = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        setAuth(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {auth ? (
        <div>
          <Navbar />
          <Carousel />
          <div className="mt-[-25px]">
            <Search />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="ml-[25px]">REKOMENDASI KOS</h1>
            <div className="flex gap-8 justify-center">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div>
              <Selengkapnya />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-[50px]">
            <h1 className="ml-[25px]">REKOMENDASI KONTRAKAN</h1>
            <div className="flex gap-8 justify-center">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div>
              <Selengkapnya />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-[50px]">
            <h1 className="ml-[25px]">REKOMENDASI ARTIKEL</h1>
            <div className="flex gap-8 justify-center">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div>
              <Selengkapnya />
            </div>
          </div>
          <div className="mt-[50px]">
            <Footer />
          </div>
          <div className="mx-auto w-[100px]">
            <h3>{name}</h3>
            <button onClick={handleDelete}>Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <h3>Login now</h3>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Beranda;
