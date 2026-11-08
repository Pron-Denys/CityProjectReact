import "./Header.css"

function Header() {
    return (
        <div className="header">
            <h1>Полтава</h1>
            <div className="headerDiv">
                <div className="headerBlock">
                    <div>
                        <p>Країна:</p>
                        <p><b>Україна</b></p>
                    </div>
                    <div>
                        <p>Рік заснування:</p>
                        <p><b>899 рік</b></p>
                    </div>
                    <div>
                        <p>Населення:</p>
                        <p><b>279 500 осіб</b></p>
                    </div>
                    <div>
                        <p>Площа:</p>
                        <p><b>103 км²</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;