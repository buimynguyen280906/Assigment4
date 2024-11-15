import React, { useState } from "react";
// import { Delete } from "react-bootstrap-icons";

function Home() {
    const [customerId, setCustomerId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [yearOfBirth, setYearOfBirth] = useState("");
    const [customers, setCustomers] = useState([]); // danh sách khách hàng

   
    const handleAddCustomer = () => {
        const newCustomer = {
            customerId,
            customerName,
            address,
            yearOfBirth,
        };

        setCustomers([...customers, newCustomer]);

        setCustomerId("");
        setCustomerName("");
        setAddress("");
        setYearOfBirth("");
    };

    return (
        <div>
            <h1>Customer List</h1>
            <input
                type="text"
                placeholder="Customer ID"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Year of Birth"
                value={yearOfBirth}
                onChange={(e) => setYearOfBirth(e.target.value)}
            />
            <button onClick={handleAddCustomer}>Thêm Khách hàng mới</button>

            {/* Hiển thị danh sách khách hàng */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Year of Birth</th>
                        <th class= "delete"> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.customerId}</td>
                            <td>{customer.customerName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.yearOfBirth}</td>
                            <td>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
