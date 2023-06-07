﻿using System.Dynamic;
using System.Reflection;
using Application.DTOs;
using Domain;
using MongoDB.Driver;
using Persistence;

namespace Application.Core;

public class CourseMapper
{
    private readonly DataContext _context;

    public CourseMapper(DataContext context)
    {
        _context = context;
    }

    public async Task<CourseDto> CourseToCourseDto(Course course, CancellationToken cancellationToken) 
    {
        Type courseType = typeof(Course);
        Type courseDtoType = typeof(CourseDto);
        PropertyInfo[] courseProperties = courseType.GetProperties();
        PropertyInfo[] courseDtoProperties = courseDtoType.GetProperties();

        CourseDto courseDto = new();
        foreach (var courseProperty in courseProperties)
        {
            var destinationProperty = courseDtoProperties.FirstOrDefault(p => p.Name == courseProperty.Name);

            if (destinationProperty == null)
            {
                throw new Exception("Properties not matching.");
            }

            var value = courseProperty.GetValue(course);
            if (destinationProperty.Name == "School")
            {
                var result = await  _context.Schools.Find(s => s.Id.Equals(course.School)).FirstOrDefaultAsync(cancellationToken);
                dynamic school = new ExpandoObject();
                school.Id = result.Id.ToString();
                school.Name = result.Name;
                school.Description = result.Description;
                school.ImageLink = result.ImageLink;
                value = school;
            }

            if (destinationProperty.Name == "Id")
            {
                value = value.ToString();
            }

            destinationProperty.SetValue(courseDto, value);
        }

        return courseDto;
    }

    public void CourseToCourse(Course course, Course course2)
    {
        Type courseType = typeof(Course);
        PropertyInfo[] properties = courseType.GetProperties();


        foreach (var property in properties)
        {
            var value = property.GetValue(course);
            if (value != null && value != (object)0 && property.Name != "Id")
            {
                property.SetValue(course2, value);
            }
        }

    }
}