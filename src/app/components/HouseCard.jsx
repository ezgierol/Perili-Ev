import React from 'react'

export default function HouseCard({ houseData, index, totalHouses }) {
  const houseDetails = [
    { label: 'Fiyat', value: houseData.price },
    { label: 'Lokasyon', value: houseData.location },
    { label: 'Metrekare', value: houseData.squareFeet },
    { label: 'Dönüm', value: houseData.acres },
    { label: 'Yapım Yılı', value: houseData.yearBuilt },
    { label: 'Yatak Odası', value: houseData.bedrooms },
    { label: 'Banyo', value: houseData.bathrooms },
    { label: 'Diğer Odalar', value: houseData.otherRooms },
    { label: 'Garaj', value: houseData.garage ? 'Evet' : 'Hayır' },
    { label: 'Klima', value: houseData.airConditioning ? 'Evet' : 'Hayır' },
    { label: 'Isıtma Sistemi', value: houseData.heating ? 'Evet' : 'Hayır' },
    { label: 'Lanetli', value: houseData.haunted ? 'Evet' : 'Hayır' },
  ]

  return (
    <div className="house-card">
      <p>
        {totalHouses} / {index + 1}
      </p>
      <img src={houseData.image} alt="House" />
      <div>
        <ul>
          {houseDetails.map((detail, index) => (
            <li key={index}>
              <span>{detail.label}:</span> {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
