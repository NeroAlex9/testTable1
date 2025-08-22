import React, { useState } from 'react';
import s from "./Table.module.scss";

interface TProps<T> {
    name: string;
    nameColumn: string[];
    data: T[];
    rowsPerPage?: number;
}

const Table = <T extends object>({
     name,
     nameColumn,
     data,
     rowsPerPage = 4
    }: TProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);

    if (!data.length) {
        return <div className={s.section}>Нет данных</div>;
    }

    const keys = Object.keys(data[0]) as (keyof T)[];

    // расчет страниц
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className={s.section}>
            <div className={s.name}>{name}</div>
            <input className={s.search} placeholder="Поиск" />

            <table className={s.table}>
                <thead className={s.thead}>
                <tr className={s.tr}>
                    <th className={s.th}></th>
                    {nameColumn.map((column: string, index: number) => (
                        <th className={s.th} key={index}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody className={s.tbody}>
                {paginatedData.map((row, rowIndex) => (
                    <tr className={s.tr} key={rowIndex}>
                        <td className={s.checkbox}><input type="checkbox" /></td>
                        {keys.map((key, colIndex) => (
                            <td className={s.td} key={colIndex}>
                                {row[key] as React.ReactNode}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

            <div className={s.pagination}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Назад
                </button>
                <span>
                    Страница {currentPage} из {totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Вперёд
                </button>
            </div>
        </div>
    );
};

export default Table;
