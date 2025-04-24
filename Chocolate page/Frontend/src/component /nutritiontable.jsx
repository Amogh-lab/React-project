import './nutritiontable.css'

function NutritionTable() {
  return (
    <div className="nutrition-wrapper">
      <h2 className="nutrition-title">Nutritional Value (per 100g of Dark Chocolate)</h2>
      <table className="nutrition-table">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>546 kcal</td>
          </tr>
          <tr>
            <td>Total Fat</td>
            <td>31 g</td>
          </tr>
          <tr>
            <td>Saturated Fat</td>
            <td>19 g</td>
          </tr>
          <tr>
            <td>Carbohydrates</td>
            <td>61 g</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>48 g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>4.9 g</td>
          </tr>
          <tr>
            <td>Iron</td>
            <td>11.9 mg</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NutritionTable
