import React from 'react'



const Pagination = ({ totalPost, postPerPage,paginate }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
		pageNumbers.push(i)
	}
	return (
    <nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				{
					pageNumbers.map((number) => {
						return (
              <li class="page-item">
                <a onClick={()=> paginate(number)} class="page-link" href="!#">
                  {number}
                </a>
              </li>
            );
						
					})
				}
        
      </ul>
    </nav>
  );
}

export default Pagination;