/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Comment;
import com.dpt.pojo.Post;
import com.dpt.pojo.PostDetails;
import com.dpt.pojo.Role;
import com.dpt.pojo.User;
import com.dpt.repository.StatsRepository;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Root;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author dptuy
 */
@Repository
@Transactional
public class StatsRepositoryImpl implements StatsRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private SimpleDateFormat format;

    @Override
    public List<Object[]> userStats() {
        Session session = this.factory.getObject().getCurrentSession();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> criteriaQuery = criteriaBuilder.createQuery(Object[].class);

        Root user = criteriaQuery.from(User.class);
        Root role = criteriaQuery.from(Role.class);

        criteriaQuery.multiselect(role.get("id"), role.get("name"), criteriaBuilder.count(user.get("id")));
        criteriaQuery.where(criteriaBuilder.equal(user.get("roleId"), role.get("id")));
        criteriaQuery.groupBy(role.get("id"));

        Query query = session.createQuery(criteriaQuery);

        return query.getResultList();
    }

    @Override
    public List<Object[]> postStats(Map<String, String> params) {
        Session session = this.factory.getObject().getCurrentSession();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> criteriaQuery = criteriaBuilder.createQuery(Object[].class);

        Root post = criteriaQuery.from(Post.class);
        Join<Post, Comment> joinComment = post.join("commentSet", JoinType.LEFT);
        Join<Post, PostDetails> joinDetail = post.join("postDetailsSet", JoinType.LEFT);

        criteriaQuery.multiselect(post, criteriaBuilder.count(joinComment), criteriaBuilder.count(joinDetail));

        if (params != null && !params.isEmpty()) {
            String year = params.get("year");
            if (year != null && !year.isEmpty()) {
                criteriaQuery.where(criteriaBuilder.equal(criteriaBuilder.function("YEAR", Integer.class, post.get("createdDate")), Integer.valueOf(year)));
            }
        }
        criteriaQuery.groupBy(post.get("id"));
        Query query = session.createQuery(criteriaQuery);

        return query.getResultList();
    }

    @Override
    public List<Integer> getYears() {
        Session session = this.factory.getObject().getCurrentSession();
        Query query = session.createQuery("select distinct year(createdDate) from Post order by year(createdDate) desc");

        return query.getResultList();
    }

    @Override
    public List<Object[]> postStatsByYear(Map<String, String> params) {
        Session session = this.factory.getObject().getCurrentSession();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> criteriaQuery = criteriaBuilder.createQuery(Object[].class);

        Root post = criteriaQuery.from(Post.class);

        Expression<Integer> year = criteriaBuilder.function("YEAR", Integer.class, post.get("createdDate"));

        criteriaQuery.multiselect(year, criteriaBuilder.count(year));

        if (params != null && !params.isEmpty()) {
            String month = params.get("month");
            if (month != null && !month.isEmpty()) {
                criteriaQuery.where(criteriaBuilder.equal(criteriaBuilder.function("MONTH", Integer.class, post.get("createdDate")), Integer.valueOf(month)));
            }

            String quarter = params.get("quarter");
            if (quarter != null && !quarter.isEmpty()) {
                criteriaQuery.where(criteriaBuilder.equal(criteriaBuilder.function("QUARTER", Integer.class, post.get("createdDate")), Integer.valueOf(quarter)));
            }
        }
        criteriaQuery.groupBy(year);
        criteriaQuery.orderBy(criteriaBuilder.desc(year));
        Query query = session.createQuery(criteriaQuery);

        return query.getResultList();
    }
}
