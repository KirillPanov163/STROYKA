'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import styles from './page.module.css';

interface AnalyticsStats {
  totalPageviews: number;
  totalEvents: number;
  uniqueVisitors: number;
}

interface PageView {
  page: string;
  _count: {
    id: number;
  };
}

interface DeviceStat {
  device: string | null;
  _count: {
    id: number;
  };
}

interface BrowserStat {
  browser: string | null;
  _count: {
    id: number;
  };
}

interface OrderStats {
  totalOrders: number;
  statusStats: Array<{
    status: string;
    _count: {
      id: number;
    };
  }>;
  dailyOrderStats: Array<{
    date: string;
    count: number;
  }>;
  totalAmount: number;
}

interface ConversionStats {
  totalOrders: number;
  completedOrders: number;
  inProgressOrders: number;
  newOrders: number;
  conversionRate: number;
}

export default function AnalyticsPage() {
  const { user } = useAppSelector((state) => state.user);
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [deviceStats, setDeviceStats] = useState<DeviceStat[]>([]);
  const [browserStats, setBrowserStats] = useState<BrowserStat[]>([]);
  const [devicePages, setDevicePages] = useState<
    { device: string; pages: string; totalViews: number }[]
  >([]);
  const [hourlyStats, setHourlyStats] = useState<{ hour: string; count: number }[]>([]);
  const [dailyStats, setDailyStats] = useState<{ date: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month' | 'all'>('week');
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );
  const [orderStats, setOrderStats] = useState<OrderStats | null>(null);
  const [conversionStats, setConversionStats] = useState<ConversionStats | null>(null);
  
  useEffect(() => {
    if (user?.role === 'ADMIN') {
      fetchAnalyticsData();
      fetchOrderStats();
    }
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [user, timeRange]);

  const margin = windowWidth < 765 ? '60px auto' : '0px auto';
  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const [
        statsResponse,
        pageViewsResponse,
        deviceResponse,
        browserResponse,
        devicePagesResponse,
        hourlyResponse,
        dailyResponse,
      ] = await Promise.all([
        axiosInstance.get('/analytics/stats', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/pageviews', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/devices', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/browsers', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/device-pages', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/hourly', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/daily', { params: { timeRange } }),
      ]);

      setStats(statsResponse.data.data.totalStats);
      setPageViews(pageViewsResponse.data.data);
      setDeviceStats(deviceResponse.data.data);
      setBrowserStats(browserResponse.data.data);
      setDevicePages(devicePagesResponse.data.data);
      setHourlyStats(hourlyResponse.data.data);
      setDailyStats(dailyResponse.data.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderStats = async () => {
    try {
      const [orderResponse, conversionResponse] = await Promise.all([
        axiosInstance.get('/analytics/stats/orders', { params: { timeRange } }),
        axiosInstance.get('/analytics/stats/orders/conversion')
      ]);

      setOrderStats(orderResponse.data.data);
      setConversionStats(conversionResponse.data.data);
    } catch (error) {
      console.error('Error fetching order stats:', error);
    }
  };

  if (!user || user.role !== 'ADMIN') {
    return (
      <div className={styles.container}>
        <h1>Доступ запрещен</h1>
        <p>Только администраторы могут просматривать эту страницу.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <h1>Аналитика сайта</h1>
        <div className={styles.loading}>Загрузка данных...</div>
      </div>
    );
  }

  return (
    <div className={styles.container} style={{ margin }}>
      <div className={styles.header}>
        <h1>Аналитика сайта</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value as any)}
          className={styles.select}
        >
          <option value="today">Сегодня</option>
          <option value="week">Неделя</option>
          <option value="month">Месяц</option>
          <option value="all">Все время</option>
        </select>
      </div>

      {stats && (
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Просмотры страниц</h3>
            <div className={styles.statNumber}>{stats.totalPageviews}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Всего событий</h3>
            <div className={styles.statNumber}>{stats.totalEvents}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Уникальные посетители</h3>
            <div className={styles.statNumber}>{stats.uniqueVisitors}</div>
          </div>
        </div>
      )}

      {/* Статистика заказов */}
      {orderStats && conversionStats && (
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Всего заказов</h3>
            <div className={styles.statNumber}>{orderStats.totalOrders}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Выполнено заказов</h3>
            <div className={styles.statNumber}>{conversionStats.completedOrders}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Новых заказов</h3>
            <div className={styles.statNumber}>{conversionStats.newOrders}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Конверсия</h3>
            <div className={styles.statNumber}>{conversionStats.conversionRate}%</div>
          </div>
          <div className={styles.statCard}>
            <h3>Общая сумма</h3>
            <div className={styles.statNumber}>
              {orderStats.totalAmount.toLocaleString('ru-RU')} ₽
            </div>
          </div>
        </div>
      )}

      {/* Графики посещаемости */}
      <div className={styles.chartsSection}>
        <div className={styles.chartContainer}>
          <h2 className={styles.chartTitle}>Посещаемость по часам</h2>
          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#69b1ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartContainer}>
          <h2 className={styles.chartTitle}>Посещаемость по дням</h2>
          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#69b1ff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* График ежедневных заказов */}
      {orderStats && orderStats.dailyOrderStats.length > 0 && (
        <div className={styles.chartsSection}>
          <div className={styles.chartContainer}>
            <h2 className={styles.chartTitle}>Заказы по дням</h2>
            <div className={styles.chart}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={orderStats.dailyOrderStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#ff6b6b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      <div className={styles.sections}>
        {/* Статистика статусов заказов */}
        {orderStats && orderStats.statusStats.length > 0 && (
          <div className={styles.section}>
            <h2>Статусы заказов</h2>
            <div className={styles.table}>
              {orderStats.statusStats.map((item, index) => (
                <div key={index} className={styles.tableRow}>
                  <span className={styles.statusName}>
                    {item.status === 'NEW' && 'Новые'}
                    {item.status === 'IN_PROGRESS' && 'В работе'}
                    {item.status === 'COMPLETED' && 'Выполнено'}
                    {item.status === 'CANCELLED' && 'Отменено'}
                  </span>
                  <span className={styles.statusCount}>{item._count.id}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.section}>
          <h2>Популярные страницы</h2>
          <div className={styles.table}>
            {pageViews.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <span className={styles.pageName}>{item.page}</span>
                <span className={styles.pageCount}>{item._count.id}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Устройства и страницы</h2>
          <div className={styles.table}>
            {devicePages.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.devicePages}>
                  <span className={styles.deviceName}>{item.device || 'Неизвестно'}</span>
                  <span className={styles.pagesList}>{item.pages}</span>
                </div>
                <span className={styles.deviceCount}>{item.totalViews}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Устройства</h2>
          <div className={styles.table}>
            {deviceStats.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <span className={styles.deviceName}>{item.device || 'Неизвестно'}</span>
                <span className={styles.deviceCount}>{item._count.id}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Браузеры</h2>
          <div className={styles.table}>
            {browserStats.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <span className={styles.browserName}>{item.browser || 'Неизвестно'}</span>
                <span className={styles.browserCount}>{item._count.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
