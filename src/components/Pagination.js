import React from 'react'

export const Pagination = ({totalPost,postPerPage}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
		pageNumbers.push(i)
	}
	return (
    <div>
      <nav aria-label="Page navigation example">
				<ul class="pagination">
					{pageNumbers.map(number => {
						    <li class="page-item" key={number}>
                  <a class="page-link" href="!#">
                    {number}
                  </a>
                </li>;
					})}
      
          
        </ul>
      </nav>
    </div>
  );
}
