import React from "react"; // Mengimpor pustaka React

class LampuLaluLintas extends React.Component {
    constructor(props) {
        super(props); // Memanggil konstruktor dari React.Component
        this.state = { warna: "merah" }; // Mendefinisikan state awal dengan warna "merah"
    }

    // Metode untuk mengubah warna menjadi "hijau"
    ubahWarna = () => {
        this.setState({ warna: 'hijau' }); // Mengubah state warna
    }

    render() {
        return (
            <>
                <h1>{this.state.warna}</h1> {/* Menampilkan warna saat ini */}
                <button onClick={this.ubahWarna}>ubah warna</button> {/* Tombol untuk mengubah warna */}
            </>
        );
    }
}

export default LampuLaluLintas; // Mengekspor komponen untuk digunakan di file lain