export const query = `
{
    women:womenCollection{
      items{
        id
        name
        price
        rating
        image{
          url
        }
      }
    }
  }
`

export const menquery= `
{
    men:menCollection{
      items{
        id
        name
        price
        rating
        image{
          url
        }
      }
    }
  }
`

export const salequery= `
{
    sale:saleCollection{
      items{
        id
        name
        gender
        originalprice
        saleprice
        rating
        image{
          url
        }
      }
    }
  }
`

export const searchquery= `
{
    sale:saleCollection{
      items{
        id
        name
        gender
        originalprice
        saleprice
        rating
        image{
          url
        }
      }
    }
    men:menCollection{
      items{
        id
        name
        price
        rating
        image{
          url
        }
      }
    }
    women:womenCollection{
      items{
        id
        name
        price
        rating
        image{
          url
        }
      }
    }
  }
`