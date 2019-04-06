const router = require('koa-router')()
const gradient = require('../model/gradient');
const colorcard = require('../model/colorcard');
router.prefix('/colorrgba')

// getGradientData 获取gradient 分页数据
router.get('/getGradientData', async (ctx, next) => {
    let { current_page, page_size } = ctx.request.query
    // console.log(current_page)
    // console.log(page_size)
    current_page = parseInt(current_page)
    page_size = parseInt(page_size)
    const totalCount = await gradient.getTotalCount()
    const gradientData = await gradient.findAll((current_page-1)*page_size,page_size,['createTime','desc'])
    
    ctx.body = {
        totalCount: totalCount[0].id,
        gradient: gradientData,
    }

})

// getColorCardData 获取colorrgba 分页数据
router.get('/getColorCardData', async (ctx, next) => {
    let { current_page, page_size } = ctx.request.query
    // console.log(current_page)
    // console.log(page_size)
    current_page = parseInt(current_page)
    page_size = parseInt(page_size)
    const totalCount = await colorcard.getTotalCount()
    const colorCardData = await colorcard.findAll((current_page-1)*page_size,page_size,['createTime','desc'])
    
    ctx.body = {
        totalCount: totalCount[0].id,
        colorCard: colorCardData,
    }

})

router.get('/getIndexData', async (ctx, next) => {
    const gradientData = await gradient.findAll(0,12,['createTime','desc'])
    const colorCardData = await colorcard.findAll(0,12,['createTime','desc'])

    ctx.body = {
        gradient: gradientData,
        colorCard: colorCardData
    }


})

module.exports = router