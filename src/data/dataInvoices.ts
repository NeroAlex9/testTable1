export interface Invoice {
    number: string;
    type: string;
    examinee: string;
    qualification: string;
    amount: string;
    customer: string;
    customerINN: string;
    executor: string;
    executorINN: string;
    paymentPurpose: string;
}

export const invoicesColumn: string[] = [
    '№',
    'Тип',
    'ФИО экзаменуемого',
    'Квалификация',
    'Сумма',
    'Заказчик',
    'Заказчик ИНН',
    'Исполнитель',
    'Исполнитель ИНН',
    'Назначение платежа'
];



export const invoicesData: Invoice[] = [
    {
        number: 'INV-001',
        type: 'обучение',
        examinee: 'Петров Иван Сергеевич',
        qualification: 'WEB-DEV',
        amount: "12500",
        customer: 'ООО "ТехноПрофи"',
        customerINN: '7701234567',
        executor: 'ИП Иванов А.С.',
        executorINN: '7719876543',
        paymentPurpose: 'Оплата обучения по курсу "Веб-разработка". Группа WD-24-01. Период обучения: 15.01.2024-15.04.2024'
    },
    {
        number: 'INV-002',
        type: 'пошлина',
        examinee: 'Сидорова Мария Петровна',
        qualification: 'EXAM-FEE',
        amount: "8500",
        customer: 'ЗАО "СтройГарант"',
        customerINN: '7723456789',
        executor: 'ООО "Образовательный Центр"',
        executorINN: '7734567890',
        paymentPurpose: 'Оплата государственной пошлины за проведение квалификационного экзамена. Дата экзамена: 20.01.2024'
    },
    {
        number: 'INV-003',
        type: 'обучение',
        examinee: 'Кузнецов Андрей Викторович',
        qualification: 'QA-ENG',
        amount: "15600",
        customer: 'ИП Козлов Д.В.',
        customerINN: '7745678901',
        executor: 'АНО "Профессиональное Образование"',
        executorINN: '7756789012',
        paymentPurpose: 'Оплата программы повышения квалификации "Тестирование программного обеспечения". Продолжительность: 72 академических часа'
    },
    {
        number: 'INV-004',
        type: 'пошлина',
        examinee: 'Васильева Ольга Игоревна',
        qualification: 'CERT-EX',
        amount: "9200",
        customer: 'ООО "ТрансЛогистик"',
        customerINN: '7767890123',
        executor: 'ИП Смирнова Е.К.',
        executorINN: '7778901234',
        paymentPurpose: 'Оплата экзаменационных материалов и сертификации. Сертификат действителен в течение 3 лет'
    },
    {
        number: 'INV-005',
        type: 'обучение',
        examinee: 'Николаев Дмитрий Александрович',
        qualification: 'DATA-SCI',
        amount: "13400",
        customer: 'ПАО "Банк Финанс"',
        customerINN: '7789012345',
        executor: 'ООО "Учебный Комбинат"',
        executorINN: '7790123456',
        paymentPurpose: 'Оплата курсов профессиональной переподготовки "Анализ данных и машинное обучение". Программа включает практические занятия и итоговую аттестацию'
    },{
        number: 'INV-006',
        type: 'обучение',
        examinee: 'Петров Иван Сергеевич',
        qualification: 'WEB-DEV',
        amount: "12500",
        customer: 'ООО "ТехноПрофи"',
        customerINN: '7701234567',
        executor: 'ИП Иванов А.С.',
        executorINN: '7719876543',
        paymentPurpose: 'Оплата обучения по курсу "Веб-разработка". Группа WD-24-01. Период обучения: 15.01.2024-15.04.2024'
    },
    {
        number: 'INV-007',
        type: 'пошлина',
        examinee: 'Сидорова Мария Петровна',
        qualification: 'EXAM-FEE',
        amount: "8500",
        customer: 'ЗАО "СтройГарант"',
        customerINN: '7723456789',
        executor: 'ООО "Образовательный Центр"',
        executorINN: '7734567890',
        paymentPurpose: 'Оплата государственной пошлины за проведение квалификационного экзамена. Дата экзамена: 20.01.2024'
    },
    {
        number: 'INV-008',
        type: 'обучение',
        examinee: 'Кузнецов Андрей Викторович',
        qualification: 'QA-ENG',
        amount: "15600",
        customer: 'ИП Козлов Д.В.',
        customerINN: '7745678901',
        executor: 'АНО "Профессиональное Образование"',
        executorINN: '7756789012',
        paymentPurpose: 'Оплата программы повышения квалификации "Тестирование программного обеспечения". Продолжительность: 72 академических часа'
    },{
        number: 'INV-009',
        type: 'обучение',
        examinee: 'Петров Иван Сергеевич',
        qualification: 'WEB-DEV',
        amount: "12500",
        customer: 'ООО "ТехноПрофи"',
        customerINN: '7701234567',
        executor: 'ИП Иванов А.С.',
        executorINN: '7719876543',
        paymentPurpose: 'Оплата обучения по курсу "Веб-разработка". Группа WD-24-01. Период обучения: 15.01.2024-15.04.2024'
    },
    {
        number: 'INV-010',
        type: 'пошлина',
        examinee: 'Сидорова Мария Петровна',
        qualification: 'EXAM-FEE',
        amount: "8500",
        customer: 'ЗАО "СтройГарант"',
        customerINN: '7723456789',
        executor: 'ООО "Образовательный Центр"',
        executorINN: '7734567890',
        paymentPurpose: 'Оплата государственной пошлины за проведение квалификационного экзамена. Дата экзамена: 20.01.2024'
    },
    {
        number: 'INV-011',
        type: 'обучение',
        examinee: 'Кузнецов Андрей Викторович',
        qualification: 'QA-ENG',
        amount: "15600",
        customer: 'ИП Козлов Д.В.',
        customerINN: '7745678901',
        executor: 'АНО "Профессиональное Образование"',
        executorINN: '7756789012',
        paymentPurpose: 'Оплата программы повышения квалификации "Тестирование программного обеспечения". Продолжительность: 72 академических часа'
    }
];