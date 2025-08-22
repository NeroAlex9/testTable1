export interface Payment {
    number: string;
    createDate: string;
    type: string;
    amount: string;
    customer: string;
    customerINN: string;
    executor: string;
    executorINN: string;
    examinee: string;
    paymentComment: string;
    accountantComment: string;
}

export const paymentsColumn: string[] = [
    '№',
    'Дата создания',
    'Тип',
    'Сумма',
    'Заказчик',
    'Заказчик ИНН',
    'Исполнитель',
    'Исполнитель ИНН',
    'ФИО экзаменуемого',
    'Комментарий платежа',
    'Комментарий бухгалтера'
];



export const paymentsData: Payment[] = [
    {
        number: '001',
        createDate: '2024-01-15',
        type: 'электронный',
        amount: "12500",
        customer: 'ООО "ТехноПрофи"',
        customerINN: '7701234567',
        executor: 'ИП Иванов А.С.',
        executorINN: '7719876543',
        examinee: 'Петров Иван Сергеевич',
        paymentComment: 'Оплата за обучение по курсу "Веб-разработка"',
        accountantComment: 'Проведен, документы подписаны'
    },
    {
        number: '002',
        createDate: '2024-01-16',
        type: 'наличный',
        amount: "8500",
        customer: 'ЗАО "СтройГарант"',
        customerINN: '7723456789',
        executor: 'ООО "Образовательный Центр"',
        executorINN: '7734567890',
        examinee: 'Сидорова Мария Петровна',
        paymentComment: 'Оплата госпошлины за экзамен',
        accountantComment: 'Принято к учету'
    },
    {
        number: '003',
        createDate: '2024-01-17',
        type: 'электронный',
        amount: "15600",
        customer: 'ИП Козлов Д.В.',
        customerINN: '7745678901',
        executor: 'АНО "Профессиональное Образование"',
        executorINN: '7756789012',
        examinee: 'Кузнецов Андрей Викторович',
        paymentComment: 'Оплата обучения по программе повышения квалификации',
        accountantComment: 'Ожидание подтверждения'
    },
    {
        number: '004',
        createDate: '2024-01-18',
        type: 'наличный',
        amount: "9200",
        customer: 'ООО "ТрансЛогистик"',
        customerINN: '7767890123',
        executor: 'ИП Смирнова Е.К.',
        executorINN: '7778901234',
        examinee: 'Васильева Ольга Игоревна',
        paymentComment: 'Оплата экзаменационных материалов',
        accountantComment: 'Проверка документов'
    },
    {
        number: '005',
        createDate: '2024-01-19',
        type: 'электронный',
        amount: "13400",
        customer: 'ПАО "Банк Финанс"',
        customerINN: '7789012345',
        executor: 'ООО "Учебный Комбинат"',
        executorINN: '7790123456',
        examinee: 'Николаев Дмитрий Александрович',
        paymentComment: 'Оплата курсов профессиональной переподготовки',
        accountantComment: 'Оплата подтверждена'
    },{
        number: '006',
        createDate: '2024-01-15',
        type: 'электронный',
        amount: "12500",
        customer: 'ООО "ТехноПрофи"',
        customerINN: '7701234567',
        executor: 'ИП Иванов А.С.',
        executorINN: '7719876543',
        examinee: 'Петров Иван Сергеевич',
        paymentComment: 'Оплата за обучение по курсу "Веб-разработка"',
        accountantComment: 'Проведен, документы подписаны'
    },
    {
        number: '007',
        createDate: '2024-01-16',
        type: 'наличный',
        amount: "8500",
        customer: 'ЗАО "СтройГарант"',
        customerINN: '7723456789',
        executor: 'ООО "Образовательный Центр"',
        executorINN: '7734567890',
        examinee: 'Сидорова Мария Петровна',
        paymentComment: 'Оплата госпошлины за экзамен',
        accountantComment: 'Принято к учету'
    },
    {
        number: '008',
        createDate: '2024-01-17',
        type: 'электронный',
        amount: "15600",
        customer: 'ИП Козлов Д.В.',
        customerINN: '7745678901',
        executor: 'АНО "Профессиональное Образование"',
        executorINN: '7756789012',
        examinee: 'Кузнецов Андрей Викторович',
        paymentComment: 'Оплата обучения по программе повышения квалификации',
        accountantComment: 'Ожидание подтверждения'
    }
];