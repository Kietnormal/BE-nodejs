module.exports=(objectPanigation,query,countProduct)=>{
    if (query.page) {
        objectPanigation.curentPage = parseInt(query.page);
      }
      objectPanigation.skip =(objectPanigation.curentPage - 1) * objectPanigation.limitItem;
      
    
      // console.log(countProduct);
      const totalpage=Math.ceil(countProduct/objectPanigation.limitItem);
      // console.log(totalpage)
      objectPanigation.totalpage=totalpage;
      return objectPanigation;
}