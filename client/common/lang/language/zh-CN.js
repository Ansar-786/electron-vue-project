import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
    applicationName: '门店管理系统',
    refresh: '刷新',
    switchText: '中英文切换',
    signOut: '退出登录',
    total: '合计',
    prompt: '提示',
    sure: '确定',
    save: '保存',
    cancel: '取消',
    upload: '上传',
    temporaryImport: '门店临期品导入',
    selectFileText: '选择上传文件',
    selectFileTip: '上传xlsx/xlsb/xlsm/xls/csv文件，一次只能上传一个文件',
    logOutTip: '您将退出登录, 是否继续?',
    logOutSucess: '退出登录成功!',
    account: '账号',
    password: '密码',
    loginWrong: '账户或密码错误',
    loginField1Tip: '账号不能为空',
    loginField2Tip: '密码不为空',
    uploadFailed: '上传失败',
    operating: '操作',
    enterGroup: '请输入{0}',
    selectGroup: '请选择{0}',
    checkUpdate: '检查更新',
    chat: '聊天',
    enterChatRoom: '加入聊天室',
    outChatRoom: '退出聊天室',
    onlineStaff: '在线人员',
    content: '内容',
    entrance: {
        temporaryGoods: '临期商品',
        storeDelivery: '门店叫货',
        checkInspection: '卫检关单查询',
        advisory: '在线咨询'
    },
    list: {
        'temporaryList': '临期品记录列表',
        'specialList': '特价单申请列表',
        'addTemporary': '新增临期品纪录',
        'editTemporary': '编辑临期品纪录'
    },
    table: {
        noData: '暂无数据',
        applyNo: '申请单编号',
        hdShopCode: '门店',
        applyNum: '数量',
        amount: '金额',
        createdDate: '申请日期',
        realname: '修改人',
        updateDate: '修改时间',
        auditStatus: '单据状态',
        barcode: '条码',
        goodsName: '商品名称',
        validPeriod: '有效期',
        shelfLife: '保质天数',
        remainingShelfLife: '剩余保质天数',
        currentNumber: '当前数量',
        sku: '商业代码',
        producedDate: '生产日期',
        overdueDate: '过期日期',
        num: '数字'
    },
    customTime: {
        nowadays: '今天',
        yesterday: '昨天',
        lastWeek: '最近一周',
        lastMonth: '最近一个月',
        lastTreeMonth: '最近三个月',
        day: '天'
    },
    message: {
        msg1: '请先选中查看的一行',
        msg2: '当前页为第一页',
        msg3: '当前页为最后一页',
        msg4: '至少选中一项',
        msg5: '删除成功',
        msg6: '删除不成功',
        saveSuccess: '保存成功',
        saveError: '保存不成功'
    },
    btn: {
        mainMenu: '主菜单',
        myQuickMenu: '我的快捷菜单',
        goToMainMenu: '返回主菜单',
        inquire: '查询',
        reset: '重置',
        export: '导出',
        toView: '查看',
        prePage: '上一页',
        nextPage: '下一页',
        addToFastMenu: '添加至常用菜单',
        addedToFastMenu: '已添加至常用菜单',
        back: '返回',
        create: '立即创建',
        tplDownload: '模板下载',
        import: '导入',
        add: '新增',
        edit: '编辑',
        delete: '删除',
        send: '发送'
    },
    form: {
        title: '临期品处理',
        subTitle: '临保商品特价单申请列表 | 门店临期品记录列表',
        producedDateLabel: '生产日期：',
        producedDatePlaceholder: '选择生产日期',
        overdueDateLabel: '过期日期：',
        overdueDatePlaceholder: '选择过期日期',
        curNum: '当前数量：',
        shelfLifeLabel: '剩余保质期天数：',
        barcodeLabel: '商业条码：',
        skuLabel: '商业代码：'
    },
    billDetails: {
        temporaryTreatment: '临期品处理',
        commodityDetails: '临保商品特价单申请单商品详情',
        sku: '商业代码',
        goodName: '商品名称',
        warrantyTime: '质保时间',
        durabilityDays: '保质天数',
        shelfLifeDays: '剩余保质天数',
        applyStock: '申请时库存',
        applyNum: '申请数量',
        storePrice: '门店库存价',
        salePrice: '门店现售价',
        provisionalPrice: '建议临期价',
        auditsNum: '审核数量',
        auditPrice: '审核价格',
        applyStockAmount: '申请库存金额',
        applyPriceAmount: '申请售价金额',
        provisionalPriceAmount: '建议临期价金额'
    },
    ...zhLocale
}